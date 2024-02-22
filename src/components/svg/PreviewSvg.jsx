"use client";

import { useAllValueContext } from "@/hooks/useAllValueContext";

const PreviewSvg = ({ id }) => {
  const { setProductId, setShowProductModal } = useAllValueContext();

  return (
    <button
      onClick={() => {
        setShowProductModal(true), setProductId(id);
      }}
      className="text-xs text-center"
    >
      <div className="flex items-center justify-center mb-2 transition-all rounded-full hover:bg-primary bg-dark-100 text-light backdrop-blur-sm hover:bg-brand h-11 w-11">
        <svg
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-4 h-4"
        >
          <path
            d="M15.9309 16.649L15.6144 16.3326L15.265 16.6123C13.7999 17.7851 11.9486 18.49 9.93592 18.49C5.22202 18.49 1.38 14.6412 1.38 9.92617C1.38 5.21168 5.22146 1.37024 9.93592 1.37024C14.6505 1.37024 18.4938 5.21182 18.4938 9.92617C18.4938 11.9413 17.788 13.7958 16.6141 15.2633L16.3345 15.6127L16.651 15.9292L20.4185 19.6967C20.5083 19.7924 20.5577 19.9192 20.5562 20.0506C20.5546 20.1836 20.5011 20.3106 20.407 20.4046C20.3129 20.4986 20.1858 20.5519 20.0528 20.5533C19.9213 20.5546 19.7944 20.505 19.6987 20.4148L15.9309 16.649ZM17.479 9.92617C17.479 5.74725 14.1148 2.38313 9.93592 2.38313C5.757 2.38313 2.39287 5.74725 2.39287 9.92617C2.39287 14.1044 5.75627 17.4771 9.93592 17.4771C14.1156 17.4771 17.479 14.1044 17.479 9.92617Z"
            fill="currentColor"
            stroke="currentColor"
          ></path>
        </svg>
      </div>
      Preview
    </button>
  );
};

export default PreviewSvg;
