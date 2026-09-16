export type UIkitBoolean = boolean extends infer T ? T : never

export interface UIkitAccordionOptions {
  active?: number
  animation?: UIkitBoolean
  collapsible?: UIkitBoolean
  content?: string
  duration?: number
  multiple?: UIkitBoolean
  targets?: string
  toggle?: string
  transition?: string
  offset?: number
}
