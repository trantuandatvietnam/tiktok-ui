import { faCircleXmark, faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeadlessTippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useEffect, useRef, useState } from "react";
import "tippy.js/dist/tippy.css";
import AccountItem from "~/components/AccountItem";
import { SearchIcon } from "~/components/Icons";
import { Wapper as PopperWrapper } from "~/components/Popper";
import { useDebounced } from "~/hooks";
import * as searchServices from "~/services/searchService";

import styles from "./Search.module.scss";

const cx = classNames.bind(styles);

const Search = () => {
    const inputRef = useRef(null);

    const [searchValues, setSearchValues] = useState("");
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const [loading, setLoading] = useState(false);

    const handleChangeSearchValue = (e) => {
        const newSearchValue = e.target.value;
        // Check if both current searchValues and newSearchValue are an empty string  then not setSearchValues
        if (!newSearchValue.startsWith(" ")) {
            setSearchValues(newSearchValue);
        }
    };

    const handleClear = () => {
        setSearchValues("");
        inputRef.current.focus();
        setSearchResult([]);
    };
    const handleHideResult = () => {
        setShowResult(false);
    };

    // hooks
    const debounced = useDebounced(searchValues, 500);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    useEffect(() => {
        if (!debounced.trim()) {
            setSearchResult([]);
            return;
        }
        setLoading(true);
        (async function callSearchApi() {
            const searchData = await searchServices.callSearchApi(
                searchValues,
                "less"
            );
            setLoading(false);
            setSearchResult(searchData);
        })();
        /* eslint-disable react-hooks/exhaustive-deps */
    }, [debounced]);

    return (
        // Note: Add div to fix warning in Tippy
        <div>
            <HeadlessTippy
                interactive
                placement="bottom-end"
                visible={showResult && searchResult.length > 0}
                onClickOutside={handleHideResult}
                render={(attrs) => (
                    <div
                        className={cx("search-result")}
                        tabIndex="-1"
                        {...attrs}
                    >
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
                        <button
                            onMouseDown={(e) => e.preventDefault()}
                            onClick={handleSubmit}
                            className={cx("search-btn")}
                        >
                            <SearchIcon />
                        </button>
                    </HeadlessTippy>
                </div>
            </HeadlessTippy>
        </div>
    );
};

export default Search;
