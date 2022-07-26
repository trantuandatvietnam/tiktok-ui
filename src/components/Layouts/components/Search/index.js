import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import { Wapper as PopperWrapper } from "~/components/Popper";
import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
    const inputRef = useRef(null);
    const timeoutRef = useRef(null);

    const [searchValues, setSearchValues] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleChangeSearchValue = (e) => {
        const newSearchValue = e.target.value;
        // Check if both current searchValues and newSearchValue are an empty string  then not setSearchValues
        if (!searchValues && !newSearchValue.trim()) {
            return;
        }
        setSearchValues(newSearchValue);
    };

    const handleClear = () => {
        setSearchValues("");
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        if (!searchValues.trim()) {
            setSearchResult([]);
            return;
        }
        timeoutRef.current = setTimeout(() => {
            setLoading(true);
            // Call api
            fetch(
                `https://tiktok.fullstack.edu.vn/api/users/search?q=${encodeURIComponent(
                    searchValues
                )}&type=less`
            )
                .then((res) => {
                    return res.json();
                })
                .then(({ data }) => {
                    setSearchResult(data || []);
                })
                .finally(() => {
                    setLoading(false);
                });
        }, 350);
    }, [searchValues]);

    return (
        <HeadlessTippy
            interactive
            placement="bottom-end"
            visible={showResult && searchResult.length > 0}
            onClickOutside={handleHideResult}
            render={(attrs) => (
                <div className={cx("search-result")} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx("search-title")}>Tài khoản</h4>
                        {searchResult.map((acc) => (
                            <AccountItem key={acc.id} acc={acc} />
                        ))}
                    </PopperWrapper>
                </div>
            )}
        >
            <div className={cx("search")}>
                <input
                    ref={inputRef}
                    spellCheck={false}
                    placeholder="Tìm kiếm tài khoản và video"
                    type="text"
                    onChange={handleChangeSearchValue}
                    value={searchValues}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValues && !loading && (
                    <button onClick={handleClear} className={cx("clear")}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}
                {loading && (
                    <button className={cx("loading")}>
                        <FontAwesomeIcon icon={faSpinner} />
                    </button>
                )}
                <HeadlessTippy content="Tìm kiếm">
                    <button className={cx("search-btn")}>
                        <SearchIcon />
                    </button>
                </HeadlessTippy>
            </div>
        </HeadlessTippy>
    );
};

export default Search;
