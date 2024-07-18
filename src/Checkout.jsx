import {
  reactExtension,
  Text,
  TextBlock,
  BlockStack,
  useSettings,
  Link,
  Image
} from "@shopify/ui-extensions-react/checkout";

// 1. Choose an extension target
const checkoutBlock = reactExtension("purchase.checkout.block.render", () => <App />);
export { checkoutBlock };

function App() {

  const { description: description_govx , link: clientLink, image: clientImage, linkFind: clientLinkFind } = useSettings();

  const description = description_govx ?? 'Military, First Responder, Government Employee and Teacher discount available. Verify with GovX ID to instantly unlock additional savings.'
  const link = clientLink ?? 'https://auth.govx.com/shopify/verify?shop=powerplate2.myshopify.com&utm_source=shopify&utm_medium=govxid&utm_campaign=custom_link'
  const image = clientImage ?? 'https://i2.govx.net/images/cdn/govx-id-new-logo-orange-black.png?t=1000';
  const linkFind = clientLinkFind ?? 'https://www.govx.com/t/govx-id';

  return (
    <>

      <BlockStack padding={"base"} border={'base'}>
        <TextBlock>
          <Text>{description}</Text>
        </TextBlock>
        <TextBlock inlineAlignment={'end'}>
          <Link to={link} external={true}>
              <Image source={image} border={'base'} fit={'contain'} />
          </Link>
          <Link to={linkFind}>What is GovX ID?</Link>
        </TextBlock>
      </BlockStack>
    
    </>
  )

  
}