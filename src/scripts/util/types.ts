/**
 * we define our types here (most of our types are UIkit types).
 * we're doing this to keep clean our util scripts file.
 * may in the future we update UIkit typescript library
 * and make types exportable, and prevent from doing this
 */
import UIkit from 'uikit'

import UIkitGridOptions = UIkit.UIkitGridOptions
import UIkitIconOptions = UIkit.UIkitIconOptions
import UIkitHeightViewportOptions = UIkit.UIkitHeightViewportOptions
import UIkitNavOptions = UIkit.UIkitNavOptions
import UIkitNavbarOptions = UIkit.UIkitNavbarOptions
import UIkitDropOptions = UIkit.UIkitDropOptions
import UIkitOffcanvasOptions = UIkit.UIkitOffcanvasOptions
import UIkitToggleOptions = UIkit.UIkitToggleOptions
import UIkitModalOptions = UIkit.UIkitModalOptions
import UIkitSwiterOptions = UIkit.UIkitSwiterOptions
import UIkitSwitcherOptions = UIkit.UIkitSwitcherOptions
import UIkitTooltipOptions = UIkit.UIkitTooltipOptions
import UIkitTabOptions = UIkit.UIkitTabOptions
import UIkitStickyOptions = UIkit.UIkitStickyOptions
import UIkitAccordionOptions = UIkit.UIkitAccordionOptions
import UIkitNotificationOptions = UIkit.UIkitNotificationOptions

interface FormData {
  busy: boolean
  data: any
}

export {
  UIkitGridOptions,
  UIkitIconOptions,
  UIkitHeightViewportOptions,
  UIkitNavOptions,
  UIkitNavbarOptions,
  UIkitDropOptions,
  UIkitOffcanvasOptions,
  UIkitToggleOptions,
  UIkitModalOptions,
  UIkitSwiterOptions,
  UIkitSwitcherOptions,
  UIkitTooltipOptions,
  UIkitTabOptions,
  FormData,
  UIkitStickyOptions,
  UIkitAccordionOptions,
  UIkitNotificationOptions,
}
