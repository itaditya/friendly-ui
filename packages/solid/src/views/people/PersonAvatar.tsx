import { mergeProps, ParentComponent } from 'solid-js';
import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';
import { Link, useSearchParams } from 'solid-app-router';

export type PersonAvatarProps = {
  personId: string;
  src: string;
  class?: string;
};

const defaultProps = { class: '' } as const;

const PersonAvatar: ParentComponent<PersonAvatarProps> = (ip) => {
  const p = mergeProps(defaultProps, ip);
  const [searchParams] = useSearchParams();

  function getHref() {
    const urlParams = new URLSearchParams(searchParams);
    const qs = urlParams.toString();

    return `/people/${p.personId}?${qs}`;
  }

  return (
    <div class={personAvatarStyles.avatarWrapper}>
      <Link
        href={getHref()}
        class={personAvatarStyles.avatarLink}
      >
        <img
          src={p.src}
          alt="remember to fill this"
          class={`${personAvatarStyles.avatar} ${p.class}`}
        />
      </Link>
      <button type="button" class={personAvatarStyles.addBtn}></button>
    </div>
  );
};

export default PersonAvatar;
