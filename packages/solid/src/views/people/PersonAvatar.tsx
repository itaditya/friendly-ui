import { mergeProps, ParentComponent } from 'solid-js';
import personAvatarStyles from '@friendly-ui/design/person_avatar.module.css';
import { Link } from 'solid-app-router';

export type PersonAvatarProps = {
  personId: string;
  src: string;
  class?: string;
};

const defaultProps = { class: '' } as const;

const PersonAvatar: ParentComponent<PersonAvatarProps> = (ip) => {
  const p = mergeProps(defaultProps, ip);

  return (
    <Link href={`/people/${p.personId}`}>
      <img
        src={p.src}
        alt="remember to fill this"
        class={`${personAvatarStyles.avatar} ${p.class}`}
      />
    </Link>
  );
};

export default PersonAvatar;
