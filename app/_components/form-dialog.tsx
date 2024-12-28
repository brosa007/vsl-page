import { useState } from "react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "./ui/dialog";
import { Input } from "./ui/input";

interface FormDialogProps {
  productId: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSubmit: (data: any) => Promise<void>;
}

export default function FormDialog({
  productId,
  onSubmit,
}: FormDialogProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    street_number: "",
    street: "",
    district: "",
    city: "",
    state: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    const dataToSend = {
      ...formData,
      product_id: productId,
    };
    await onSubmit(dataToSend);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Comprar</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="p-6 space-y-4">
          <h2 className="text-xl font-semibold">
            Preencha os dados
          </h2>
          <form className="space-y-4">
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <Input
              type="email"
              name="email"
              placeholder="E-mail"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <Input
              type="text"
              name="phone_number"
              placeholder="Telefone"
              value={formData.phone_number}
              onChange={handleChange}
              required
            />
            <div className="flex gap-2">
              <Input
                type="text"
                name="street_number"
                placeholder="Número"
                value={formData.street_number}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="street"
                placeholder="Rua"
                value={formData.street}
                onChange={handleChange}
                required
              />
            </div>
            <Input
              type="text"
              name="district"
              placeholder="Bairro"
              value={formData.district}
              onChange={handleChange}
              required
            />
            <div className="flex gap-2">
              <Input
                type="text"
                name="city"
                placeholder="Cidade"
                value={formData.city}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="state"
                placeholder="Estado"
                value={formData.state}
                onChange={handleChange}
                required
              />
            </div>
          </form>
          <Button
            className="w-full bg-secondary text-white hover:bg-slate-800"
            onClick={handleSubmit}
          >
            Confirmar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
