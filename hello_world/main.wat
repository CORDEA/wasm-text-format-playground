(module
  (import "env" "memory" (memory 1))
  (data (i32.const 0) "Hello, ")
  (data (i32.const 7) "World")
  (func (export "helloWorld") (result i32)
        i32.const 12))
