export type FormConfinItem = {
  formType: string
  type?: string
  label?: string
  col?: string,
  uniKey: string,
  placeholder?: string,
  rules: any,
  required?: boolean
}

export type OptionItem = {
  label: string,
  value: string | number
}

export type DefaultPropsData = {
  config: FormConfinItem[]
  confirm?: object
}

export type DefaultInput = {
  label?: string
  type?: string
  col?: string
  uniKey: string
  placeholder?: string
  rules?: any
  required?: boolean
  options?: { label: string, value: string }[]
}