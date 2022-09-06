import { NextPage } from "next";
import { useRouter } from "next/router";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Item } from "../../../src/interface/Item";
import { docAPI } from "../../../src/service/docService";

const AddPage: NextPage = () => {
  const [payload, setPayload] = useState<Item>({
    id: "",
    img: "",
    name: "",
    url: "",
  });
  const router = useRouter();
  const submitForm = async (event: FormEvent) => {
    event.preventDefault();
    if (confirm("Bạn có chắc chưa?")) {
      await docAPI.create(payload);
      router.push("/manager");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };
  return (
    <div>
      <form method="POST" onSubmit={submitForm}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            onChange={handleChange}
            value={payload.name}
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="url">Url</label>
          <input
            type="text"
            onChange={handleChange}
            value={payload.url}
            name="url"
            id="url"
            required
          />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddPage;
