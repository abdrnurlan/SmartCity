import inspect


PROJECT_ID = "tokyo-crossbar-480311-d7"
LOCATION = "us-central1"


def print_header(title: str) -> None:
    print(f"\n=== {title} ===")


def safe_print_signature(obj, label: str) -> None:
    try:
        print(f"{label}: {inspect.signature(obj)}")
    except Exception as error:
        print(f"{label}: signature unavailable -> {error}")


def list_matching_names(module, keywords: tuple[str, ...]) -> None:
    matches = sorted(
        name for name in dir(module) if any(keyword in name.lower() for keyword in keywords)
    )
    if not matches:
        print("No matching names found")
        return
    for name in matches[:200]:
        print(name)


print_header("Imports")

from google import genai
from google.genai import types

print("google.genai: OK")
print("google.genai.types: OK")

print_header("google.genai top-level names")
list_matching_names(genai, ("video", "veo", "generate", "client", "operation"))

print_header("google.genai.types names")
list_matching_names(types, ("video", "veo", "generate", "image", "operation", "config"))

print_header("Client constructor")
safe_print_signature(genai.Client, "genai.Client")

client = None

print_header("Client init")
try:
    client = genai.Client(vertexai=True, project=PROJECT_ID, location=LOCATION)
    print("genai.Client(vertexai=True, project=..., location=...): OK")
except Exception as error:
    print(f"genai.Client init failed -> {error}")

if client is not None:
    print_header("client attributes")
    list_matching_names(client, ("model", "video", "generate", "operation"))

    if hasattr(client, "models"):
        print_header("client.models attributes")
        list_matching_names(client.models, ("video", "generate", "image", "operation"))

        for name in sorted(dir(client.models)):
            if any(keyword in name.lower() for keyword in ("video", "generate")):
                attr = getattr(client.models, name)
                if callable(attr):
                    safe_print_signature(attr, f"client.models.{name}")

    if hasattr(client, "operations"):
        print_header("client.operations attributes")
        list_matching_names(client.operations, ("get", "video", "operation", "list"))
        for name in sorted(dir(client.operations)):
            if any(keyword in name.lower() for keyword in ("get", "list", "cancel")):
                attr = getattr(client.operations, name)
                if callable(attr):
                    safe_print_signature(attr, f"client.operations.{name}")
