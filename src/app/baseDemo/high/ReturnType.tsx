
//  ? ReturnType 返回类型

type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;
const awd: K = false


// instructive error:
// 必选返回的是类型 而不是 值
function f() {
  return { x: 10, y: 3 };
}
type P1 = ReturnType<f>;
type P = ReturnType<typeof f>;
// x: number;
// y: number;
