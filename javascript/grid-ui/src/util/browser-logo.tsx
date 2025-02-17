import chromeLogo from '../assets/browsers/chrome.svg'
import edgeLogo from '../assets/browsers/edge.svg'
import operaLogo from '../assets/browsers/opera.svg'
import firefoxLogo from '../assets/browsers/firefox.svg'
import internetExplorerLogo from '../assets/browsers/internet-explorer.png'
import safariLogo from '../assets/browsers/safari.svg'
import safariTechnologyPreviewLogo
  from '../assets/browsers/safari-technology-preview.png'
import unknownBrowserLogo from '../assets/browsers/unknown.svg'

const browserLogo = (browser: string): string => {
  const browserName = browser ?? ''
  if (browserName.length === 0) {
    return unknownBrowserLogo
  }

  switch (browserName.toLowerCase()) {
    case 'chrome':
      return chromeLogo
    case 'microsoftedge':
      return edgeLogo
    case 'msedge':
      return edgeLogo
    case 'opera':
      return operaLogo
    case 'firefox':
      return firefoxLogo
    case 'internet explorer':
      return internetExplorerLogo
    case 'safari':
      return safariLogo
    case 'safari technology preview':
      return safariTechnologyPreviewLogo
    default:
      return unknownBrowserLogo
  }
}

export default browserLogo
