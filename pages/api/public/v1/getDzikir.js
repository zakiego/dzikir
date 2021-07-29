export default async function GetDzikir(req, res) {
	const { Client } = require("@notionhq/client");

	const notion = new Client({ auth: process.env.NOTION_API_KEY });

	const databaseListDzikirId = "2230948f-6df9-4339-b806-1a85751a515f";
	const listDzikir = await notion.databases.query({
		database_id: databaseListDzikirId,
	});

	const arraylistDzikir = listDzikir.results;

	const mapingListDzikir = arraylistDzikir.map((data) => {
		const arabic = data.properties.Arabic.title[0].plain_text;
		const arti = data.properties.Arti.rich_text[0].plain_text;
		const id = data.properties.ID.number;
		const category = data.properties.Category.multi_select.map((data) => {
			return data.name;
		});
		const dibaca = data.properties.Dibaca.rich_text[0].plain_text;
		const faidah = data.properties.Faidah.rich_text[0].plain_text;
		const lastEdited = data.properties.LastEdited.last_edited_time;
		const latin = data.properties.Latin.rich_text[0].plain_text;
		const sumber = data.properties.Sumber.rich_text[0].plain_text;
		const catatan = data.properties.Catatan.rich_text[0].plain_text;

		return {
			id,
			category,
			arabic,
			latin,
			arti,
			sumber,
			dibaca,
			faidah,
			catatan,
			lastEdited,
		};
	});

	const databaseListSumberId = "c8ff67a2-3cd0-4a53-a578-bc13360126ac";
	const listSumber = await notion.databases.query({
		database_id: databaseListSumberId,
	});

	const arrayListSumber = listSumber.results;

	const mapingListSumber = arrayListSumber.map((data) => {
		const id = data.properties.Id.number;
		const link = data.properties.Link.title[0].plain_text;
		return { id, link };
	});

	res.status(200);
	res.json({ data: { dzikir: mapingListDzikir, sumber: mapingListSumber } });
}
