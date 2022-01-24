---
sidebar_position: 1
---

import TOCInline from '@theme/TOCInline';
import DocsCard from '/src/components/global/DocsCard';
import DocsCards from '/src/components/global/DocsCards';
import ProductKeyFeatures from '/src/components/ProductKeyFeatures';
import Codepen from '/src/components/global/Codepen';


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
  <DocsCard 
    header="Register" 
    headerAlign="left"
    img="/img/register.png">
  </DocsCard>
  <DocsCard
    header="Login"
    headerAlign="center"
    img="/img/login.jpg">
  </DocsCard>
  <DocsCard 
    header="Lost Password" 
    headerAlign="right"
    img="/img/lost-password.jpg">
  </DocsCard>
</DocsCards>

## Use Tip, Warning, Danger

:::tip Pro Tip
When you have selected a customized time period of a week or more, play the Bubble visualization to see how the performance changes over time. As well as being a useful way to visualize the data, it also looks really cool. 
:::

:::info Info
When you have selected a customized time period of a week or more, play the Bubble visualization to see how the performance changes over time. As well as being a useful way to visualize the data, it also looks really cool. 
:::


:::caution WARNING
Keep out of the reach of small children
:::

:::danger WARNING
Keep out of the reach of small children
:::

## Certifications

<DocsCards>
  <DocsCard 
    headerAlign="left"
    img="/img/ce.png">
  </DocsCard>
  <DocsCard
    headerAlign="center"
    img="/img/sigfox.png">
  </DocsCard>
  <DocsCard 
    headerAlign="right"
    img="/img/r-nz.png">
  </DocsCard>
  <DocsCard 
    headerAlign="left"
    img="/img/low-power.jpg">
  </DocsCard>
  <DocsCard
    headerAlign="center"
    img="/img/rohs.png">
  </DocsCard>
  <DocsCard 
    headerAlign="right"
    img="/img/recycleable.jpg">
  </DocsCard>
</DocsCards>

## Sample Include codepen

:::note
Tip: make sure to view the Codepen below in a [supported browser](https://caniuse.com/#feat=prefers-color-scheme) and then try changing the system preferences on your device between light & dark mode. Here's [how to enable dark mode on Windows 10](https://blogs.windows.com/windowsexperience/2016/08/08/windows-10-tip-personalize-your-pc-by-enabling-the-dark-theme/) and [how to enable it on a Mac](https://support.apple.com/en-us/HT208976).
:::

<!-- 
Codepen https://codepen.io/ionic/pen/jONzJpG 
Changed to https://codepen.io/rcyou/pen/QEObEk/
-->

<Codepen preview="false" user="rcyou" slug="QEObEk" height="550px" default-tab="js,result" />