import React, { useEffect, useState } from "react";
import Sidebar from "../components/sidebar";
import axios from "axios";
import { Link } from "react-router-dom";
import Modals from "../components/modal";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { useAuth } from "../store/auth";
import { jwtDecode } from "jwt-decode";

const DaftarEkskul = () => {
  const { loginResponse } = useAuth();
  const [currentData, setCurrentData] = useState();
  const [data, setData] = useState();
  let role;
  let decoded;

  if (loginResponse) {
    const token = loginResponse;
    decoded = jwtDecode(token);
  }
  role = decoded?.is_admin;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { register: registers, handleSubmit: handleSubmits, reset: resets, setValue, formState } = useForm();

  const { register: registerss, handleSubmit: handleSubmitss, reset: resetss } = useForm();

  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_API_URL}/ekskul`);
      setData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/ekskul`, data);
      toast.success("Data berhasil ditambahkan");
      getData();
      document.getElementById("my_modal_1").close();
      reset();
    } catch (error) {
      toast.error("Gagal menambahkan data");
      document.getElementById("my_modal_1").close();
    }
  };

  const onUpdate = async (data) => {
    try {
      await axios.patch(`${import.meta.env.VITE_API_URL}/ekskul/${currentData?.uuid}`, data);
      toast.success("Data berhasil diupdate");
      getData();
      document.getElementById("my_modal_2").close();
      resets();
    } catch (error) {
      toast.error("Gagal mengupdate data");
      document.getElementById("my_modal_2").close();
    }
  };

  const deletedData = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_API_URL}/ekskul/${id}`);
      getData();
      toast.success("Data berhasil dihapus");
    } catch (error) {
      toast.error("Gagal menghapus data");
    }
  };

  const openEditModal = (data) => {
    setCurrentData(data);
    setValue("nama", data.nama); // Set values to the form
    setValue("jadwal", data.jadwal);
    setValue("deskripsi", data.deskripsi);
    document.getElementById("my_modal_2").showModal();
  };

  const daftar = async (data) => {
    try {
      await axios.post(`${import.meta.env.VITE_API_URL}/pendaftaran`, {
        deskripsi: data.deskripsi,
        id_ekskul: currentData, // Menggunakan uuid dari currentData jika currentData adalah objek dengan uuid
      });
      toast.success("Anda Berhasil Mendaftar");
      resetss();
      document.getElementById("my_modal_3").close();
    } catch (error) {
      toast.error(error.response?.data?.msg || "Gagal mendaftar");
      resetss();
      document.getElementById("my_modal_3").close();
    }
  };

  const statusEkskul = async (id) => {
    try {
      const response = await axios.patch(`${import.meta.env.VITE_API_URL}/statusEkskul/${id}`);
      getData();
      toast.success(response.data);
      console.log(response.data);
    } catch (error) {
      toast.error("error");
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Sidebar>
        <div className="w-full h-full font-bold bg-primary p-10">
          <h1 className={`text-2xl text-black font-extrabold mt-10  ${role === 1 ? "-mb-7" : " mb-2"}`}>Daftar Ekskul</h1>
          <button
            className={`w-60 mt-20 mb-5 bg-cyan-500 text-black py-2 rounded-xl ${role === 1 ? "" : "hidden"}`}
            onClick={() => {
              document.getElementById("my_modal_1").showModal();
            }}
          >
            Tambah Data
          </button>
          <div className="overflow-x-auto">
            <table className="table text-center rounded-lg overflow-hidden">
              <thead className=" text-white bg-cyan-500">
                <tr>
                  <th className="text-center">No</th>
                  <th>Ekskul</th>

                  <th>Jadwal</th>
                  <th>Deskripsi</th>
                  <th>Status</th>
                  <th>Aksi</th>
                </tr>
              </thead>
              <tbody className="text-black font-normal">
                {data?.map((item, index) => (
                  <tr key={index} className="last:rounded-b-lg">
                    <th className="text-center">{index + 1}</th>
                    <td className="w-32">{item?.nama}</td>

                    <td className="w-44">{item?.jadwal}</td>
                    <td>{item?.deskripsi}</td>
                    <td className="w-48">{item?.status}</td>
                    {role === 1 ? (
                      <td className="grid grid-cols-2  w-40 justify-center items-center gap-1">
                        <Link to={`/detail-ekskul/${item.uuid}`} className="w-full bg-cyan-500 rounded-lg py-1 text-center" onClick={() => console.log(item.uuid)}>
                          Lihat
                        </Link>
                        <button className="w-full bg-yellow-500 rounded-lg py-1" onClick={() => openEditModal(item)}>
                          Edit
                        </button>
                        <button className={`w-full rounded-lg py-1 ${item.status === "Open Recruitment" ? "bg-red-500" : item.status === "Close Recruitment" ? " bg-green-500" : "bg-none"}`} onClick={() => statusEkskul(item.uuid)}>
                          {item.status === "Open Recruitment" ? "Close" : "Open"}
                        </button>
                        <button className="w-full bg-red-500 rounded-lg py-1" onClick={() => deletedData(item.uuid)}>
                          Hapus
                        </button>
                      </td>
                    ) : (
                      <td>
                        {item?.status === "Open Recruitment" ? (
                          <button
                            className="px-5 bg-cyan-500 rounded-lg py-1 hover:bg-gray-400 duration-300"
                            onClick={() => {
                              setCurrentData(item.uuid);
                              document.getElementById("my_modal_3").showModal();
                            }}
                          >
                            Daftar
                          </button>
                        ) : item?.status === "Close Recruitment" ? (
                          <h1>Pendaftaran Telah Ditutup</h1>
                        ) : (
                          <h1>Tidak Valid</h1>
                        )}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </Sidebar>

      {/* Add Data */}
      <Modals title="Tambah Data" reset={reset}>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5 w-full justify-center items-center rounded-xl" id="modalForms">
          <input
            {...register("nama", {
              required: "Nama Ekskul yang mau diikuti ",
              pattern: {
                value: /^[A-Za-z\s / -]+$/i,
                message: "Nama Lengkap  hanya boleh mengandung huruf",
              },
            })}
            type="text"
            className={`input input-bordered w-full bg-primary border border-black placeholder:text-gray-500 ${errors.nama && "input-error"}`}
            placeholder="Nama Ekskul"
          />
          {errors.nama && <span className="text-red-500 text-sm">{errors.nama.message}</span>}

          <input
            {...register("jadwal", {
              required: "Jadwal harus diisi",
              pattern: {
                value: /^[A-Za-z0-9!@#$%^&*()_+\-=[\]{};':"\\|,.<>\/?`~\s-]*$/i,
                message: "Jadwal hanya boleh mengandung huruf",
              },
            })}
            type="text"
            className={`input input-bordered w-full bg-primary border border-black placeholder:text-gray-500 ${errors.jadwal && "input-error"}`}
            placeholder="Jadwal Hari Latihan"
          />
          {errors.jadwal && <span className="text-red-500 text-sm">{errors.jadwal.message}</span>}

          <textarea
            {...register("deskripsi", {
              required: "Alasan wajib diisi",
            })}
            placeholder="Deskripsi Ekskul"
            className={`textarea textarea-bordered w-full bg-primary border border-black text-black placeholder:text-gray-500 ${errors?.deskripsi && "input-error"}`}
          />
          {errors?.deskripsi && <span className="text-red-500 text-sm">{errors?.deskripsi.message}</span>}
        </form>
      </Modals>

      {/* update Data */}
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box bg-primary text-black max-w-xl flex flex-col gap-8">
          <h3 className="font-bold text-lg">Ubah Data</h3>
          <form onSubmit={handleSubmits(onUpdate)} className="flex flex-col gap-5 w-full justify-center items-center rounded-xl">
            <input
              {...registers("nama", {
                required: "Nama Lengkap diisi",
                pattern: {
                  value: /^[A-Za-z\s / -]+$/i,
                  message: "Nama Lengkap ekskul hanya boleh mengandung huruf",
                },
              })}
              type="text"
              className={`input input-bordered w-full bg-primary border border-black placeholder:text-tertiary ${formState.errors.nama && "input-error"}`}
              placeholder="Nama Lengkap ekskul"
            />

            <input
              {...registers("jadwal")}
              type="text"
              className={`input input-bordered w-full bg-primary border border-black placeholder:text-tertiary ${formState.errors.jadwal && "input-error"}`}
              placeholder="Jadwal Hari Latihan"
            />

            <textarea
              {...registers("deskripsi", {
                required: "deskripsi wajib diisi",
              })}
              placeholder="Deskripsi"
              className={`textarea textarea-bordered w-full bg-primary border border-black text-black ${formState.errors.deskripsi && "input-error"}`}
            />

            <div className="flex w-full mt-2 gap-2">
              <button className="w-full rounded-lg bg-cyan-500 py-2 px-5" type="submit">
                Kirim
              </button>
              <button
                className="w-full rounded-lg bg-red-500 py-2 px-5"
                onClick={() => {
                  document.getElementById("my_modal_2").close();
                  resets();
                }}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>

      <dialog id="my_modal_3" className="modal">
        <div className="modal-box bg-primary text-black max-w-xl flex flex-col gap-8">
          <h3 className="font-bold text-lg">Daftar Ekskul</h3>
          <form onSubmit={handleSubmitss(daftar)} className="flex flex-col gap-5 w-full justify-center items-center rounded-xl">
            <textarea
              {...registerss("deskripsi", {
                required: "deskripsi wajib diisi",
              })}
              placeholder="Deskripsikan kenapa kami harus menerima anda"
              className={`textarea textarea-bordered w-full bg-primary border border-black text-black ${formState.errors.deskripsi && "input-error"}`}
            />

            <div className="flex w-full mt-2 gap-2">
              <button className="w-full rounded-lg bg-cyan-500 py-2 px-5" type="submit">
                Kirim
              </button>
              <button
                className="w-full rounded-lg bg-red-500 py-2 px-5"
                onClick={() => {
                  document.getElementById("my_modal_3").close();
                  resetss();
                }}
                type="button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </>
  );
};

export default DaftarEkskul;
