import multer from "multer";
import path from "path";

const storage = multer.diskStorage({});

function fileFilter(req, file, cb) {
  console.log("file :>> ", file);
  console.log("req :>> ", req);
  // // The function should call `cb` with a boolean
  // // to indicate if the file should be accepted
  // // To reject this file pass `false`, like so:
  // cb(null, false)
  // // To accept the file pass `true`, like so:
  // cb(null, true)
  // // You can always pass an error if something goes wrong:
  // cb(new Error('I don\'t have a clue!'))
}

const multerUpload = multer({ storage: storage, fileFilter: fileFilter });

export default multerUpload;
