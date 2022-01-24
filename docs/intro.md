---
sidebar_position: 1
---

import TOCInline from '@theme/TOCInline';
import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';
import ProductKeyFeatures from '/src/components/ProductKeyFeatures';



# One Page Component Sample


Only heading 2 or above will be in the inline TOC
<TOCInline toc={toc} minHeadingLevel={2} maxHeadingLevel = {6} />


## Simple Table Sample

| Date | Version Number | Document Changes |
|---|---|---|
| 01/07/2019 | 0.01 | Initial Draft |
| 29/08/2019 | 0.02 | Added more detail for users |
| 09/12/2020 | 1.2 | Complete rewrite following CEN collaboration and design changes. |

## Image, Text, Bullet with custom components

<ProductKeyFeatures />

## Sample Side By Side Image without border

<DocsCards>
  <DocsCard header="Getting Started" href="react/your-first-app" icon="/icons/feature-component-actionsheet-icon.png">
    <p>Learn the fundamentals you need to know to start building amazing apps with Ionic Framework.</p>
  </DocsCard>

<DocsCard
  header="Add Ionic to Existing React App"
  href="https://dev.to/ionic/adding-ionic-react-to-an-existing-react-project-4kib"
  icon="/icons/logo-react-icon.png"
>
  <p>Use individual components or the complete app experience.</p>
</DocsCard>

<DocsCard header="Navigation" href="react/navigation" icon="/icons/feature-component-navigation-icon.png">
  <p>Learn the basics of navigation inside your app with Ionic and React Router</p>
</DocsCard>

<DocsCard header="Lifecycle" href="react/lifecycle" icon="/icons/feature-guide-components-icon.png">
  <p>Learn about using Ionic lifecycle events in class components and with hooks</p>
</DocsCard>

</DocsCards>