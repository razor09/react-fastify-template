export type TypeOfCodegen = 'component' | 'store'

export type TypeOfFile = TypeOfCodegen | 'model' | 'style' | 'index'

export type ValidProcessArgs = [TypeOfCodegen, ...string[]]
