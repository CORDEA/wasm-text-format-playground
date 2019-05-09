(module
  (func (export "plus") (param $left i32) (param $right i32) (result i32)
        get_local $left
        get_local $right
        i32.add)
  (func (export "minus") (param $left i32) (param $right i32) (result i32)
        get_local $left
        get_local $right
        i32.sub))
