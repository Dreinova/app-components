import { fetchOblicua } from "../../utils/api";

export async function GET() {
  try {
    const data = await fetchOblicua("plans"); // Reemplaza con el endpoint real
    return Response.json(data);
  } catch (error) {
    return Response.json(
      { success: false, error: error.message },
      { status: 500 }
    );
  }
}
