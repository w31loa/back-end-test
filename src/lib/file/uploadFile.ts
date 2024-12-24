import * as fs from 'fs';
import path from 'path';
import { config } from '../../config/index';

const ensureDirectoryExistence = (path: string) => {
  if (fs.existsSync(path)) {
    return true;
  }
  fs.mkdirSync(path, { recursive: true });
};

export const saveFile = (file: Express.Multer.File) => {
  const uploadFolder = path.join(__dirname, `../../../${config.file.patch}`);
  console.log(uploadFolder)
  ensureDirectoryExistence(uploadFolder);
  const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
  const fileName =
    file.fieldname + '-' + uniqueSuffix + path.extname(file.originalname);

  const filePath = path.join(uploadFolder, fileName);

  fs.writeFileSync(filePath, file.buffer);

  return {
    path: filePath,
    name: fileName
  };
};
