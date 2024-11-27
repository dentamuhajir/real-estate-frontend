import './Header.css';

function Header() {
    return (
        <div class="header">
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand"><img src={require('../../assets/Images/Logo/logo.png')} alt="" /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                        aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse nav-header justify-content-center">
                        <div>
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <a class="nav-link active">Griya</a>
                                </li>
                                <div class="vr ms-4 me-4"></div>
                                <li class="nav-item">
                                    <a class="nav-link active">Artikel</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">FAQ</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active">Promo</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;