import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Item } from "../../src/interface/Item";
import { docAPI } from "../../src/service/docService";

const ManagerPage: NextPage = () => {
  const [list, setList] = useState<Item[]>();
  const router = useRouter();
  useEffect(() => {
    (async () => {
      const rs = await docAPI.getAll();

      setList(rs);
    })();
  }, []);

  const handleDelete = async (id: number | string) => {
    await docAPI.delete(id as number);
    router.reload();
  };

  return (
    <div>
      <div>
        <Link href="/manager/add">
          <a>Add</a>
        </Link>
      </div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Url</th>
            <th>Xóa</th>
          </tr>
        </thead>
        <tbody>
          {list?.map((e) => (
            <tr>
              <td>{e.id}</td>
              <td>{e.name}</td>
              <td>{e.url}</td>
              <td>
                <button
                  onClick={() => {
                    if (confirm("Are you sure?")) handleDelete(e.id);
                  }}
                >
                  Xóa
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagerPage;
