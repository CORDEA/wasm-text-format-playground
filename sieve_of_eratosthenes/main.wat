(module
  (import "array" "push" (func $array_push (param i32)))
  (import "array" "foundPrime" (func $found_prime (param i32)))
  (import "array" "get" (func $array_get (param i32) (result i32)))
  (memory 1)
  (func (export "set_max") (param i32)
        i32.const 0
        get_local 0
        i32.store)
  (func (export "step1")
        (local i32)
        i32.const 2
        set_local 0
        (block
          (loop
            get_local 0
            call $array_push
            get_local 0
            i32.const 0
            i32.load
            i32.eq
            br_if 1
            get_local 0
            i32.const 1
            i32.add
            set_local 0
            br 0
          )
        )
  )
  (func (export "step2")
        (local i32)
        (local i32)
        (local $i i32)
        i32.const 0
        call $array_get
        set_local 0
        get_local 0
        call $found_prime

        i32.const 1
        set_local $i
        (block
          (loop
            get_local $i
            call $array_get
            set_local 1
            get_local 1
            i32.eqz
            br_if 1

            get_local 1
            get_local 0
            i32.rem_u
            (if
              (then
                get_local 1
                call $array_push))
            get_local $i
            i32.const 1
            i32.add
            set_local $i
            br 0
          )
        )
    )
  (func (export "step3") (result i32)
        i32.const 0
        call $array_get
        f32.convert_u/i32
        i32.const 0
        i32.load
        f32.convert_u/i32
        f32.sqrt
        f32.lt)
  (func (export "step4")
        (local i32)
        (local $i i32)
        (block
          (loop
            get_local $i
            call $array_get
            set_local 0
            get_local 0
            i32.eqz
            br_if 1

            get_local 0
            call $found_prime
            get_local $i
            i32.const 1
            i32.add
            set_local $i
            br 0
          )
        )
    )
)
