import fs from "fs";

const deleteLocalFile = (localFilePath) => {
  fs.unlinkSync(localFilePath);
};

export { deleteLocalFile };
