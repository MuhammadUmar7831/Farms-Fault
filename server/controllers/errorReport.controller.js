export function addError(req, res, next) {
  return res.status(200).send({ message: "heelo" });
}

export function getError(req, res, next) {
  return res.status(200).send({ message: "heelo" });
}
