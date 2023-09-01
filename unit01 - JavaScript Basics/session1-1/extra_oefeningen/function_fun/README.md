# Function Fun

## Ask for each case

1. what's the result?
2. what's the datatype?

## Answers

|     | value                    | type                             |
| --- | :----------------------- | :------------------------------- |
| A   | 3                        | Number                           |
| B   | a reference to an object | Object (with prototype Function) |
| C   | 3                        | Number                           |
| D   | Nothing                  | Nothing                          |
| E   | a reference to an object | Object (with prototype Function) |
| F   | a reference to an object | Object (with prototype Function) |
| G   | 3                        | Number                           |

## Remarks

**D)** a TypeError is thrown because `resultaat` is undefined and you can't call undefined

**F)** the difference is that the object now has a name
