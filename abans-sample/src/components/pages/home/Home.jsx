import React from 'react'
import styles from './Home.module.scss';

const Home = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.header__logo}>My Website</h1>
      </header>

      <section className={styles.hero}>
        <h2 className={styles.hero__title}>Welcome to My Website</h2>
      </section>

      <div className={styles.section}>
        <h3 className={styles.section__title}>Section Title 1</h3>
        <p className={styles.section__content}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed
          venenatis magna. Vestibulum a volutpat tellus. Suspendisse potenti.
          Quisque euismod metus a nunc gravida convallis.
        </p>
      </div>

      <div className={styles.section}>
        <h3 className={styles.section__title}>Section Title 2</h3>
        <p className={styles.section__content}>
          Fusce pharetra blandit mauris, sit amet consectetur eros faucibus
          vitae. In vel commodo elit, nec egestas odio. Nam eget aliquet dolor,
          a finibus sem. Integer rhoncus elit in neque lobortis ullamcorper.
        </p>
      </div>
    </div>
  )
}

export default Home