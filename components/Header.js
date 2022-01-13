const Header = () => {

    return (
        <div>
            <span>Hello</span>{' '}<span className="title">World</span>
            <style jsx>
                {`
                    .title {
                        color: green;
                    }
                `}
            </style>
        </div>
    );
}

export default Header;