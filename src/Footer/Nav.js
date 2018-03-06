import React from 'react';
import styled from 'styled-components';

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 16px;
`;

const Link = styled.a`
  display: block;
  line-height: 16px;
  font-size: 12px;
  color: #5b5b5c;
  margin: 0 20px 8px 0;
  text-decoration: none;
  :last-child {
    margin-right: 0;
  }
`;

const menu = [
  {
    id: 1,
    href: '#',
    text: 'О компании',
  },
  {
    id: 2,
    href: '#',
    text: 'Партнёрская программа',
  },
  {
    id: 3,
    href: '#',
    text: 'Реклама',
  },
  {
    id: 4,
    href: '#',
    text: 'Вакансии',
  },
  {
    id: 5,
    href: '#',
    text: 'Помощь',
  },
  {
    id: 6,
    href: '#',
    text: 'Правила',
  },
  {
    id: 7,
    href: '#',
    text: 'White Label авиабилеты',
  },
];

export default () => (
  <Nav>
    {menu.map(link => (
      <Link key={link.id} href={link.href}>
        {link.text}{' '}
      </Link>
    ))}
  </Nav>
);
