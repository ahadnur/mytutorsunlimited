import React from 'react'
import { FacebookProvider, CustomChat } from 'react-facebook';
function FacebookMsg() {
  return (
    <FacebookProvider appId={process.env.NEXT_PUBLIC_FACEBOOK_APP_ID} chatSupport>
        <CustomChat  pageId={process.env.NEXT_PUBLIC_FACEBOOK_PAGE_ID} minimized={false} />
      </FacebookProvider>
  )
}

export default FacebookMsg