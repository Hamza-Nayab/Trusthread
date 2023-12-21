import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const isCustomAuth = token.length < 500;
    let decodedData;
console.log(token);
    if (token && isCustomAuth) {
      decodedData = jwt.verify(token, "secret");
      req.userId = decodedData?.id;
     // req.userType = decodedData?.userType;
      //console.log(req.userId);
      //   console.log(req.userId);
    } else {
      decodedData = jwt.decode(token);
      req.userId = decodedData?.sub;
      //   console.log(req.userId);   
    }
  } catch (error) {
    console.log(error);
  }
  next();
};

export default auth;