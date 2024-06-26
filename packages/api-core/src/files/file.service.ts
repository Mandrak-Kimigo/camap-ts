import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as crypto from 'crypto';
import { In, Repository } from 'typeorm';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { checkDeleted } from '../common/utils';
import { FileEntity } from '../tools/models/file.entity';
import { File } from './models/file.type';

/**
 * File Service
 */
@Injectable()
export class FilesService {
  static CACHE = [];

  private readonly logger = new Logger('FileService');

  constructor(
    @InjectRepository(FileEntity) private readonly fileRepo: Repository<FileEntity>,
  ) {}

  /**
   * get a file by id
   */
  async findOne(id: number): Promise<FileEntity> {
    return this.fileRepo.findOne(id);
  }

  async findByIds(ids: number[]): Promise<FileEntity[]> {
    return this.fileRepo.find({ id: In(ids) });
  }

  async findOneAndConvertToFile(id: number): Promise<File> {
    const fileEntity = await this.findOne(id);
    return this.fileEntityToFile(fileEntity);
  }

  /**
   * get files - supposedly images - by ids and return their id and name
   */
  async findImagesName(ids: number[]): Promise<Pick<FileEntity, 'id' | 'name'>[]> {
    return this.fileRepo
      .createQueryBuilder('f')
      .select(['f.id', 'f.name'])
      .where(`f.id IN(${ids})`)
      .getMany();
  }

  getExtension(file: Pick<FileEntity, 'id' | 'name'>): string {
    if (!file.name) return 'png';
    return file.name.split('.')[1];
  }

  /**
   * Get the file name related to this File record.
   * Usually files should be generated in /file/
   */
  static makeSign(id?: number) {
    if (!id) return '';
    let s = FilesService.CACHE[id];
    if (s) return s;
    const hash = crypto
      .createHash('md5')
      .update(id + process.env.CAMAP_KEY)
      .digest('hex');
    s = `${id}_${hash}`;
    FilesService.CACHE[id] = s;
    return s;
  }

  /**
   * Return the url of a File record
   */
  getUrl(fileId?: number): string {
    if (!fileId) return '';
    return `/file/${FilesService.makeSign(fileId)}`;
  }

  /**
   * Convert data Buffer to a base64 string and return a File from a FileEntity
   */
  fileEntityToFile = (fileEntity: FileEntity): File => {
    let base64: string;
    try {
      base64 = fileEntity.data.toString('base64');
    } catch (e) {
      base64 = '';
    }
    return { ...fileEntity, data: base64 };
  };

  @Transactional()
  async createFromBytes(data: Buffer, fileName: string): Promise<FileEntity> {
    const file = this.fileRepo.create({ name: fileName, data, cdate: new Date() });
    return this.fileRepo.save(file);
  }

  @Transactional()
  async delete(id: number) {
    const result = await this.fileRepo.delete({ id });
    return checkDeleted(result) ? id : null;
  }
}
