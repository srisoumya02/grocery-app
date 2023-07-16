const Header = () => {
    return (
        <div className="jumbotron text-center">
            <h1 className="display-4">Hello, User!</h1>
            <p className="lead">Welcome to grocery app, which is a one stop app for all your grocery needs</p>
            <hr className="my-4" />
            <p>It uses utility classNamees for typography and spacing to space content out within the larger container.</p>
            <a className="btn btn-primary btn-lg" href="#" role="button">Start Shopping</a>
        </div>
    )
}

export default Header;