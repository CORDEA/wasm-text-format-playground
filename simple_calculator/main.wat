(module
  (memory 1)
  (func (export "add") (param i32) (result i32)
        get_local 0
        call $calculate
        i32.const 0
        i32.const 0
        i32.store8
        i32.const 1
        i32.load)
  (func (export "sub") (param i32) (result i32)
        get_local 0
        call $calculate
        i32.const 0
        i32.const 1
        i32.store8
        i32.const 1
        i32.load)
  (func $calculate (param i32)
        i32.const 0
        i32.load8_u
        if
            i32.const 1
            i32.const 1
            i32.load
            get_local 0
            i32.sub
            i32.store
        else
            i32.const 1
            i32.const 1
            i32.load
            get_local 0
            i32.add
            i32.store
        end))
