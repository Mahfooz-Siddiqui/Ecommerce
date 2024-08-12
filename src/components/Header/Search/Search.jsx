import prod from "../../../assets/products/earbuds-prod-1.webp"
import { MdClose } from "react-icons/md";
import "./Search.scss";
const Search = ({ setShowSearch }) => {
    return <div className="search-modal">
        <div className="form-field">
            <input
                type="text"
                autoFocus
                placeholder="Search for products"
            />
            <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
        </div>

        <div className="search-result-content">
            <div className="search-results">
                <div className="search-results-item">
                    <div className="image-container">
                        <img src={prod} alt="" />
                    </div>
                    <div className="prod-details">
                <span className="name">Product name</span>
                <div className="quantity-buttons">
                    <span>-</span>
                    <span>5</span>
                    <span>+</span>
                </div>
                <div className="text">
                    <span>3</span>
                    <span>X</span>
                    <span className="highlight">&#8377;3748</span>
                </div>
                </div>
            </div>
        </div>
        </div>
    </div>;
};

export default Search;
