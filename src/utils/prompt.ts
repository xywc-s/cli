import Inquirer from 'inquirer'

type PromptType =
  | 'input'
  | 'number'
  | 'confirm'
  | 'list'
  | 'rawlist'
  | 'expand'
  | 'checkbox'
  | 'password'
  | 'editor'

type PromptListItem = {
  type: PromptType
  name: string
  message: string
  choices: { name: string; value: string | number | boolean }[]
  prefix?: string
  suffix?: string
  pageSize?: number
  loop?: boolean
  askAnswered?: boolean
  waitUserInput?: boolean
}

export default async (prompts: PromptListItem[]) => {
  return await new Inquirer.prompt(prompts) // eslint-disable-line
}
