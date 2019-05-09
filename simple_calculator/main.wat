(module
  (func (export "add") (param $left i32) (param $right i32) (result i32)
        get_local $left
        get_local $right
        i32.add)
  (func (export "sub") (param $left i32) (param $right i32) (result i32)
        get_local $left
        get_local $right
        i32.sub))
