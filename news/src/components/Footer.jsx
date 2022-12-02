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

{
  /* <footer class="d-flex flex-wrap justify-content-around align-items-center py-3 my-4 border-top">
      <div class="col-md-4 d-flex align-items-center">
        <span class="navbar-brand m-3 fs-2">
          <ion-icon name="newspaper-outline"></ion-icon> NewsApp
        </span>
        <span class="text-muted">| &copy; 2021 Company, Inc</span>
      </div>

      <ul class="nav col-md-4 justify-content-end list-unstyled d-flex">
        <li class="mx-3">
          <a href="https://facebook.com" target="_blank">
            <ion-icon class="text-dark" name="logo-facebook"></ion-icon>
          </a>
        </li>
        <li class="mx-3">
          <a href="https://twitter.com" target="_blank">
            <ion-icon class="text-dark" name="logo-twitter"></ion-icon>
          </a>
        </li>
        <li class="mx-3">
          <a href="https://instagram.com" target="_blank">
            <ion-icon class="text-dark" name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </footer> */
}
