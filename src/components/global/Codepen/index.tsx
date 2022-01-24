/*
Copyright 2016 Drifty Co.
Modifications copyright 2022 Monkeytronics

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import React from 'react';

import { useScript } from '/src/components/utils/hooks';

function CodePen(props): JSX.Element {
  const status = useScript('https://static.codepen.io/assets/embed/ei.js');
  // console.log('test',status, props)
  return (
    <div
      className="codepen"
      data-height={props.height}
      data-theme-id={props.theme}
      data-default-tab={props.defaultTab}
      data-user={props.user}
      data-slug-hash={props.slug}
      data-preview={props.preview ? 'true' : 'false'}
      data-pen-title={props.penTitle}
      no-prerender="true"
    ></div>
  );
}

export default CodePen;