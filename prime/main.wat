(module
  (import "array" "push" (func $array_push (param i32)))
  (import "array" "get" (func $array_get (param i32) (result i32)))
  (func (export "step1")
        (local i32)
        i32.const 2
        set_local 0
        (block
          (loop
            get_local 0
            call $array_push
            get_local 0
            i32.const 120
            i32.eq
            br_if 1
            get_local 0
            i32.const 1
            i32.add
            set_local 0
            br 0
          )
        )
  ))
