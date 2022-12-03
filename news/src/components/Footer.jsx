const Footer = () => {
  return (
    <footer class="d-flex border-top py-3 my-4 justify-content-around">
      <div class="d-flex align-items-end">
        <div class="text-muted">&copy; 2021 Company, Inc</div>
      </div>
      <div>
        <div class="navbar-brand m-3 fs-2">
          <ion-icon name="newspaper-outline"></ion-icon> NewsApp
        </div>
      </div>
      <div class="d-flex align-items-end">
        <ul class="list-inline">
          <li class="list-inline-item">
            <a href="https://facebook.com" target="_blank">
              <ion-icon class="text-dark" name="logo-facebook"></ion-icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://twitter.com" target="_blank">
              <ion-icon class="text-dark" name="logo-twitter"></ion-icon>
            </a>
          </li>
          <li class="list-inline-item">
            <a href="https://instagram.com" target="_blank">
              <ion-icon class="text-dark" name="logo-instagram"></ion-icon>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
