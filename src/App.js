import './App.css';

function Logo() {
  return <img src='images/logo.svg' alt='logo' className='logo' />
};

function DesktopNavigationSpace() {
  return (
    <nav className='desktop-navigation-space'>
      <a>Home</a>
      <a>New</a>
      <a>Popular</a>
      <a>Trending</a>
      <a>Categories</a>
    </nav>
  );
};

function MobileMenuButton() {
  return (
    <button className='mobile-menu-button' onClick={() => {
        document.querySelector('.internal-components').classList.add('in-the-background');
        document.querySelector('.mobile-menu').classList.add('open');
    }}>
      <img src='images/icon-menu.svg' alt='Menu Button' />
    </button>
  );
};

function Header() {
  return (
    <header className='header'>
      <Logo />

      <DesktopNavigationSpace />

      <MobileMenuButton />
    </header>
  );
};

function NewsPhoto(props) {
  return (
    <picture className='news-photo'>
      <source srcSet={props.mobileSrc} media='(max-width: 600px)' />
      <source srcSet={props.desktopSrc} />
      <img srcSet={props.desktopSrc} alt='News photo' />
    </picture>
  );
};

function NewsTitle(props) {
  return <h1 className='news-title'>{props.children}</h1>
};

function NewsSubtitleSpace(props) {
  return (
    <div className='news-subtitle-space'>
      <p className='news-subtitle'>{props.children}</p>

      <button className='read-more-button'>READ MORE</button>
    </div>
  );
};

function News(props) {
  return (
    <main className='news'>
      <NewsPhoto
        desktopSrc={props.desktopPhotoSrc}
        mobileSrc={props.mobilePhotoSrc}
      />

      <NewsTitle>{props.title}</NewsTitle>

      <NewsSubtitleSpace>{props.subtitle}</NewsSubtitleSpace>
    </main>
  );
};

function NewNews(props) {
  return (
    <a>
      <div className='new-news'>
        <h4 className='new-news-title'>
          {props.title}
        </h4>

        <p className='new-news-subtitle'>
          {props.subtitle}
        </p>
      </div>
    </a>
  );
};

function LineDivisor() {
  return <div className='line-divisor'></div>
}

function New(props) {
  return (
    <section className='new'>
      <h2 className='new-title'>New</h2>

      <div className='new-news-group'>
        <NewNews
        title={props.first.title}
        subtitle={props.first.subtitle}
        />

        <LineDivisor />

        <NewNews 
        title={props.second.title}
        subtitle={props.second.subtitle}
        />

        <LineDivisor />

        <NewNews
        title={props.third.title}
        subtitle={props.third.subtitle}
        />
      </div>
    </section>
  );
};

function PopularNews(props) {
  return (
    <a>
    <section className='popular-news'>
      <img src={props.photoSrc} alt={props.photoAlt} />

      <div className='popular-news-informations'>
        <h2 className='popular-news-position'>{props.position}</h2>

        <h3 className='popular-news-title'>{props.title}</h3>

        <p className='popular-news-subtitle'>{props.subtitle}</p>
      </div>
    </section>
    </a>
  );
};

function PopularNewsGroup(props) {
  return (
    <div className='popular-news-group'>
      <PopularNews
      photoSrc={props.first.photoSrc}
      photoAlt={props.first.photoAlt}
      position='01'
      title={props.first.title}
      subtitle={props.first.subtitle}
      />

      <PopularNews
      photoSrc={props.second.photoSrc}
      photoAlt={props.second.photoAlt}
      position='02'
      title={props.second.title}
      subtitle={props.second.subtitle}
      />

      <PopularNews
      photoSrc={props.third.photoSrc}
      photoAlt={props.third.photoAlt}
      position='03'
      title={props.third.title}
      subtitle={props.third.subtitle}
      />
    </div>
  );
};

function CloseMenuButton() {
  return (
    <button className='mobile-menu-close-button' onClick={() => {
      document.querySelector('.internal-components').classList.remove('in-the-background');
      document.querySelector('.mobile-menu').classList.remove('open');
    }}>
      <img src="images/icon-menu-close.svg" alt="Menu close button" />
    </button>
  );
};

function MobileNavigationSpace() {
  return (
    <nav className='mobile-navigation-space'>
      <a>Home</a>

      <a>New</a>

      <a>Popular</a>

      <a>Trending</a>

      <a>Categories</a>
    </nav>
  );
};

function MobileMenu() {
  return (
    <section className='mobile-menu'>
      <CloseMenuButton />

      <MobileNavigationSpace />
    </section>
  );
};

function App() {
  return (
    <>
      <div className='internal-components'>
        <Header />

        <News
        desktopPhotoSrc='images/image-web-3-desktop.jpg'
        mobilePhotoSrc='images/image-web-3-mobile.jpg'
        title='The Bright Future of Web 3.0?'
        subtitle='We dive into the next evolution of the web that claims to put the power of the platforms back
        into the hands of the people. But is it really fulfilling its promise?'
        />
      
        <New
        first={{
          title: 'Hydrogen VS Electric Cars',
          subtitle: 'Will Hydrogen-fueled cars ever catch up to EVs?'
        }}

        second={{
          title: 'The Downsides of AI Artistry',
          subtitle: 'What are the possible adverse effects of on-demand AI image generation?'
        }}

        third={{
          title: 'Is VC Funding Drying Up?',
          subtitle: 'Private funding by VC firms is down 50% YOY. We take a look at what that means.'
        }}
        />

        <PopularNewsGroup
        first={{
          photoSrc: 'images/image-retro-pcs.jpg',
          photoAlt: '',
          title: 'Reviving Retro PCs',
          subtitle: 'What happens when old PCs are given modern upgrades?'
        }}

        second={{
          photoSrc: 'images/image-top-laptops.jpg',
          photoAlt: '',
          title: 'Top 10 Laptops of 2022',
          subtitle: 'Our best picks for various needs and budgets.'
        }}

        third={{
          photoSrc: 'images/image-gaming-growth.jpg',
          photoAlt: '',
          title: 'The Growth of Gaming',
          subtitle: 'How the pandemic has sparked fresh opportunities.'
        }}
        />
      </div>

      <MobileMenu />
    </>
  );
};

export default App
