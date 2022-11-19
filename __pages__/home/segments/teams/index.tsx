import Slider from 'react-slick';
import { useState } from 'react';
import RenderStyledImage from 'components/image/renderstyledimage';

import styles from './teams.module.scss';

const TEAM = [
  {
    name: '1 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/1.png',
  },
  {
    name: '2 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/2.png',
  },
  {
    name: '3 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/3.png',
  },
  {
    name: '4 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/4.png',
  },
  {
    name: '5 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/5.png',
  },
  {
    name: '6 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/2.png',
  },
  {
    name: '7 Richa Aggarwal',
    meta: 'Master of experience design',
    image: '/images/landing/team/2.png',
  },
];

export default function Teams() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const settings = {
    dots: false,
    infinite: true,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    className: styles.custom__slick,
    variableWidth: true,
    arrows: false,
    focusOnSelect: true,
    autoPlay: true,
    beforeChange: (_: number, newIndex: number) => setCurrentIndex(newIndex),
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          dots: true,
          autoplay: true,
          autoplaySpeed: 5000,
        },
      },
    ],
  };
  const siblings = [
    currentIndex + 1,
    currentIndex === 0 ? TEAM.length - 1 : currentIndex - 1,
  ];

  return (
    <div className={styles.teams__wrapper}>
      <div className={styles.teams}>
        <div className={styles.teams__text}>
          <h3>A team that never stops!</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Semper
            tortor amet, ut sed cras dolor vel.
          </p>
        </div>

        <div className={styles.teams__carousel}>
          <Slider {...settings}>
            {TEAM.map(({ name, meta, image }, index) => (
              <TeamMember
                isSibling={siblings.includes(index)}
                active={index === currentIndex}
                key={index}
                name={name}
                meta={meta}
                image={image}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
}

const TeamMember = ({
  image = '',
  name = '',
  meta = '',
  isSibling = false,
  active = false,
}) => {
  const extraStyles = isSibling
    ? styles.__sibling
    : active
    ? styles.__active
    : '';
  return (
    <div className={styles.team__member + ' ' + extraStyles}>
      <RenderStyledImage src={image} className={styles.team__member__image} />
      <h4>{name}</h4>
      <h5>{meta}</h5>
    </div>
  );
};
