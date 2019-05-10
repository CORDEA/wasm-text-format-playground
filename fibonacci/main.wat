(module
  (func $fibonacci (param i32) (result i32)
        (block (result i32)
          (block
            (block
              (block
                get_local 0
                br_table 0 1 2
                i32.const 99
                return
              )
              i32.const 0
              return
            )
            i32.const 1
            return
          )
          get_local 0
          i32.const 2
          i32.sub
          call $fibonacci
          get_local 0
          i32.const 1
          i32.sub
          call $fibonacci
          i32.add
        )
  )
  (export "fibonacci" (func $fibonacci))
)
