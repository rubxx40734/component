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

export type DefaultPropsData = {
  config: FormConfinItem[]
  confirm?: object
}