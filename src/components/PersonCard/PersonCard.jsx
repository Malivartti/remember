import React, { useContext } from 'react'
import bridge from "@vkontakte/vk-bridge";
import { Button, ContentCard, Link } from '@vkontakte/vkui'
import { Context } from '../../context';

const PersonCard = ({ header, text, link }) => {
  const { platform } = useContext(Context);

  function showPost() {
    const [owner, post] = link.substring(link.indexOf('-') + 1).split('_')
    bridge.send("VKWebAppOpenWallPost", { "owner_id": -(+owner), "post_id": +post });
  }

  return (
    <ContentCard
      header={header}
      text={text}
      caption={
        platform === "desktop_web"
          ? <Button mode='outline' onClick={showPost}>Подробнее</Button>
          : <Link href={link} target="_blank">Подробнее</Link>
      }
    />
  )
}

export default PersonCard