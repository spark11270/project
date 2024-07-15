'use client';

import Link from 'next/link';
import { useFormState } from 'react-dom';
import {
  ArchiveBoxIcon,
  CheckIcon,
  ClockIcon,
  CurrencyDollarIcon,
} from '@heroicons/react/24/outline';
import { Button } from '../button';
import { createProduct } from '../../lib/actions';
import { useState } from 'react';

export default function Form() {
  const initialState = { errors: {}, message: null };
  const [state, dispatch] = useFormState(createProduct, initialState);
  const [selected, setSelected] = useState<string>();

  function onSelect(name: string) {
    setSelected(name);
    return;
  }

  return (
    <form action={dispatch} aria-describedby="create-error">
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Product Name */}
        <div className="mb-4">
          <label htmlFor="name" className="mb-2 block text-sm font-medium">
            Set Product Name
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="name"
                name="name"
                type="string"
                placeholder="Enter product name"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="name-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="name-error" aria-live="polite" aria-atomic="true">
            {state.errors?.name &&
              state.errors.name.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Category */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Select Product Category
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex-wrap flex gap-4">
              <div className="flex items-center">
                <input
                  id="snack"
                  name="category"
                  type="radio"
                  value="Snack"
                  onChange={() => onSelect("snack")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="snack"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Snack {selected == "snack" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="pantry"
                  name="category"
                  type="radio"
                  value="Pantry"
                  onChange={() => onSelect("pantry")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="pantry"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Pantry {selected == "pantry" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="beverage"
                  name="category"
                  type="radio"
                  value="Beverage"
                  onChange={() => onSelect("beverage")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="beverage"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Beverage {selected == "beverage" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="candy"
                  name="category"
                  type="radio"
                  value="Candy"
                  onChange={() => onSelect("candy")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="candy"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Candy {selected == "candy" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="breakfast"
                  name="category"
                  type="radio"
                  value="Breakfast"
                  onChange={() => onSelect("breakfast")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="breakfast"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Breakfast {selected == "breakfast" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="meatAndSeafood"
                  name="category"
                  type="radio"
                  value="MeatAndSeafood"
                  onChange={() => onSelect("meat")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="meatAndSeafood"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Meat and Seafood {selected == "meat" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="bakeryAndDessert"
                  name="category"
                  type="radio"
                  value="BakeryAndDessert"
                  onChange={() => onSelect("bakery")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="bakeryAndDessert"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Bakery and Dessert {selected == "bakery" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="coffee"
                  name="category"
                  type="radio"
                  value="Coffee"
                  onChange={() => onSelect("coffee")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="coffee"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Coffee {selected == "coffee" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="deli"
                  name="category"
                  type="radio"
                  value="Deli"
                  onChange={() => onSelect("deli")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="deli"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Deli {selected == "deli" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="organic"
                  name="category"
                  type="radio"
                  value="Organic"
                  onChange={() => onSelect("organic")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="organic"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Organic {selected == "organic" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="cleaning"
                  name="category"
                  type="radio"
                  value="Cleaning"
                  onChange={() => onSelect("cleaning")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="cleaning"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Cleaning {selected == "cleaning" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="floral"
                  name="category"
                  type="radio"
                  value="Floral"
                  onChange={() => onSelect("floral")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="floral"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Floral {selected == "floral" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="household"
                  name="category"
                  type="radio"
                  value="Household"
                  onChange={() => onSelect("household")}
                  className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                  aria-describedby="category-error"
                />
                <label
                  htmlFor="household"
                  className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600"
                >
                  Household {selected == "household" ? <CheckIcon className="h-4 w-4" />: null}
                </label>
              </div>
            </div>
          </div>
          <div id="category-error" aria-live="polite" aria-atomic="true">
            {state.errors?.category &&
              state.errors.category.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </fieldset>

        {/* Price */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Input Product Price
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="number"
                step="0.01"
                placeholder="Enter USD price"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="price-error"
              />
              <CurrencyDollarIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="price-error" aria-live="polite" aria-atomic="true">
            {state.errors?.price &&
              state.errors.price.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Stock */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Input ProductStock
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="stock"
                name="stock"
                type="number"
                step="1"
                placeholder="Enter stock quantity"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="stock-error"
              />
              <ArchiveBoxIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="stock-error" aria-live="polite" aria-atomic="true">
            {state.errors?.stock &&
              state.errors.stock.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Expiry */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Input Product Expiry
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input
                id="price"
                name="price"
                type="string"
                placeholder="Enter expiry date (YYYY-MM-DD)"
                className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
                aria-describedby="expiry-error"
              />
              <ClockIcon className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
          <div id="expiry-error" aria-live="polite" aria-atomic="true">
            {state.errors?.expiry &&
              state.errors.expiry.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>
        
      </div>
      <div id="create-error" aria-live="polite" aria-atomic="true">
        {state.message && (
          <p className="mt-2 text-sm text-red-500" key={state.message}>
            {state.message}
          </p>
        )}
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/productss"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Product</Button>
      </div>
    </form>
  );
}
