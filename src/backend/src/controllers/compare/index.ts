function compare(req: any, res: any) {
  if (!req.query.a || !req.query.b) {
    res.json({ code: 500, message: "Array A ou Array B não encontrado(s)" });
    return false;
  }

  const { a: A, b: B } = req.query;
  const ArrayA = (A as string).split("");
  const ArrayB = (B as string).split("");
  let ArrayFinal: any = [],
    indexA = 0;

  try {
    ArrayB.map((letterB: string) => {
      let found = null;
      for (indexA; indexA < ArrayA.length; indexA++) {
        if (ArrayA[indexA].indexOf(letterB) == 0) {
          found = ArrayA[indexA];
          break;
        }
      }
      if (found == null) throw Error;

      ArrayFinal.push({
        letter: letterB,
        position: indexA,
      });
    });
    res.json(ArrayFinal);
    return true;
  } catch (e) {
    res.json({ code: 500, message: "Array B não encontrado no Array A" });
    return false;
  }
}

export default compare;
